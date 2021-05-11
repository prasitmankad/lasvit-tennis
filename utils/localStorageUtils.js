const LOCAL = "redirect-location";

export function setRedirectLocation(local) {
  localStorage.setItem(LOCAL, local);
}

export function removeRedirectLocation() {
  localStorage.removeItem(LOCAL);
}

export function getRedirectLocation() {
  try {
    const local = localStorage.getItem(LOCAL);
    return local;
  } catch (error) {
    return null;
  }
}
