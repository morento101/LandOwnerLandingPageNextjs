export const open = (setModalOpen) => {
  setModalOpen(true);
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.getElementById("modal").style.boxShadow =
      "0 0 0 50vmax rgba(0,0,0,.5)";
  }, 400);
};

export const close = (setModalOpen) => {
  document.body.style.overflow = "auto";
  document.getElementById("modal").style.boxShadow = "";
  setModalOpen(false);
};
