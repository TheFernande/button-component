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
      <div className='flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]'>
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
      <div className='flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]'>
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
      <div className='flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]'>
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
      <div className='flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]'>
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
      <div className='flex max-w-full flex-wrap items-center justify-start gap-5 pb-12 mobileGfe:max-w-[323px]'>
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
      <div className='flex max-w-full flex-wrap items-center justify-start gap-5 mobileGfe:max-w-[323px]'>
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
