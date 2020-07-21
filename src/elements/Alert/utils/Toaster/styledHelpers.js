export const animationCss = `
  @keyframes zoomInKeyframes {
    from {
      opacity: 0;
      transform: scale3d(.9, .9, .9);
    }

    to {
      opacity: 1;
    }
  }

  @keyframes zoomOutKeyframes {
    from {
      opacity: 1;
    }

    50% {
      transform: scale3d(.9, .9, .9);
    }

    to {
      opacity: 0;
    }
  }

  .zoomIn { animation-name: zoomInKeyframes; }
  .zoomOut { animation-name: zoomOutKeyframes; }
`;
