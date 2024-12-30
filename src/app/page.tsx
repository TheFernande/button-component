import Button from "@/components/button-component";
import {
  buttonVariantsA,
  buttonVariantsB,
  buttonVariantsC,
  buttonVariantsD,
  buttonVariantsE,
  buttonVariantsF
} from "./buttons.data";

import "../styles/button.css";

export default function Home() {
  return (
    // `<main>` -> this is the "Page body" element in the Figma design
    <main className='gfe-main'>
      {/* Variant A */}
      <div className='mobileGfe:max-w-[323px] flex max-w-full flex-wrap items-center justify-start gap-5 py-6 md:py-12'>
        {buttonVariantsA.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant B */}
      <div className='mobileGfe:max-w-[323px] flex max-w-full flex-wrap items-center justify-start gap-5 py-6 md:py-12'>
        {buttonVariantsB.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant C */}
      <div className='mobileGfe:max-w-[323px] flex max-w-full flex-wrap items-center justify-start gap-5 py-6 md:py-12'>
        {buttonVariantsC.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant D */}
      <div className='mobileGfe:max-w-[323px] flex max-w-full flex-wrap items-center justify-start gap-5 py-6 md:py-12'>
        {buttonVariantsD.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant E */}
      <div className='mobileGfe:max-w-[323px] flex max-w-full flex-wrap items-center justify-start gap-5 py-6 md:py-12'>
        {buttonVariantsE.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
      {/* Variant F */}
      <div className='mobileGfe:max-w-[323px] flex max-w-full flex-wrap items-center justify-start gap-5 py-6 md:py-12'>
        {buttonVariantsF.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            isDisabled={button.isDisabled}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
          />
        ))}
      </div>
    </main>
  );
}
