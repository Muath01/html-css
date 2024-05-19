export async function getUserId() {
  const userId = localStorage.getItem("userId-qtink-liia");

  return userId;
}
