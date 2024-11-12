"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SocialIcons from "@/components/shared/SocialIcons";

type AnimationState = {
  image: {
    translateX: number;
    opacity: number;
  };
  text: {
    translateX: number;
    opacity: number;
  };
};

const INITIAL_STATE: AnimationState = {
  image: {
    translateX: 0,
    opacity: 0,
  },
  text: {
    translateX: -500,
    opacity: 0,
  },
};

const ANIMATION_TIMINGS = {
  imageFade: 1000,
  imageTranslate: 1200,
  textAnimation: 2000,
};

const Vignette = () => (
  <div
    className="absolute inset-0 z-30 pointer-events-none"
    style={{
      background: `
        radial-gradient(
          circle at center,
          transparent 0%,
          transparent 45%,
          rgba(0, 0, 0, 0.4) 100%
        )
      `,
    }}
  />
);

const Hero = () => {
  const [animationState, setAnimationState] =
    useState<AnimationState>(INITIAL_STATE);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const animations = [
      {
        timing: ANIMATION_TIMINGS.imageFade,
        action: () =>
          setAnimationState((prev) => ({
            ...prev,
            image: { ...prev.image, opacity: 1 },
          })),
      },
      {
        timing: ANIMATION_TIMINGS.imageTranslate,
        action: () => {
          if (isLargeScreen) {
            setAnimationState((prev) => ({
              ...prev,
              image: { ...prev.image, translateX: -350 },
            }));
          }
        },
      },
      {
        timing: ANIMATION_TIMINGS.textAnimation,
        action: () =>
          setAnimationState((prev) => ({
            ...prev,
            text: { translateX: 0, opacity: 1 },
          })),
      },
    ];

    const timeouts = animations.map(({ timing, action }) =>
      setTimeout(action, timing)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [isLargeScreen]);

  return (
    <section className="relative flex flex-col items-center min-h-screen w-full bg-gradient-to-tr from-[#F5A623] via-[#FF6F61] to-[#D7263D] overflow-hidden">
      <HeroImage
        translateX={animationState.image.translateX}
        opacity={animationState.image.opacity}
      />
      <HeroText
        translateX={animationState.text.translateX}
        opacity={animationState.text.opacity}
        isLargeScreen={isLargeScreen}
      />
      <Vignette />
    </section>
  );
};

type AnimationProps = {
  translateX: number;
  opacity: number;
  isLargeScreen?: boolean;
};

const HeroImage = ({ translateX, opacity }: AnimationProps) => (
  <Image
    src="/bubble-tea-ai.png"
    alt="bubble tea"
    width={1200}
    height={1200}
    className="z-20 w-full lg:w-auto h-[60vh] lg:h-screen mx-auto transition-all duration-1000 object-contain lg:object-cover"
    style={{
      transform: `translateX(${translateX}px)`,
      opacity,
    }}
    priority
  />
);

const HeroText = ({ translateX, opacity, isLargeScreen }: AnimationProps) => (
  <div
    className="z-30 w-full px-6 text-center transition-all duration-1000 lg:absolute lg:right-14 lg:top-1/2 lg:w-auto lg:px-0 lg:text-left md:mt-4 lg:mt-0"
    style={{
      transform: isLargeScreen
        ? `translate(${translateX}px, -50%)`
        : `translateX(${translateX}px)`,
      opacity,
    }}
  >
    <h1 className="font-righteous lg:text-right text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text [text-shadow:_2px_2px_2px_rgb(0_0_0_/_2%)] antialiased">
      Your Flavorful Tea
      <br />
      Journey Awaits!
    </h1>
    <SocialIcons className="flex justify-center gap-6 mt-6 lg:justify-end lg:mt-8" />
  </div>
);

export default Hero;
