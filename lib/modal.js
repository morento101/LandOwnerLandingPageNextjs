export const open = (setModalOpen) => {
  document.body.style.overflow = "hidden";
  setModalOpen(true);
};

export const close = (setModalOpen) => {
  document.body.style.overflow = "auto";
  setModalOpen(false);
};
