export const fadeUp = {
  hidden: {
    opacity: 0.01,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const softScale = {
  initial: {
    opacity: 0.01,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
};

export const menuPanel = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  open: {
    x: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const menuItem = {
  closed: {
    opacity: 0.01,
    x: 24
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

