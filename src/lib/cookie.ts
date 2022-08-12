export const setCookie = (name: string, value: string) => {
  name = `tmbts-${name}`;
  let encodedName = "";
  let encodedValue = "";
  try {
    encodedName = encodeURIComponent(name);
    encodedValue = encodeURIComponent(value);
  } catch (error) {
    return;
  }

  const updatedCookie = {
    [encodedName]: encodedValue,
    sameSite: "lax",
    path: "/",
    expires: new Date(new Date().getFullYear() + 1, 1, 17).toUTCString(),
  };

  document.cookie = Object.entries(updatedCookie)
    .map(kv => kv.join("="))
    .join(";");
};

export const getCookie = (name: string) => {
  name = `tmbts-${name}`;

  if (typeof window === "undefined") {
    return undefined;
  }
  const cookies = document.cookie;

  const kv = cookies.split(";").find(part => part.trim().startsWith(name));

  if (!kv) return undefined;

  const cookieValue = kv.split("=")[1];
  if (!cookieValue) return undefined;
  try {
    return decodeURIComponent(cookieValue.trim());
  } catch (error) {
    return undefined;
  }
};
