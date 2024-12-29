import Button from "@/components/button-component";
import {
  buttonVariantsA,
  buttonVariantsB,
  buttonVariantsC,
  buttonVariantsD,
  buttonVariantsE,
  buttonVariantsF
} from "./buttons.data";

export default function Home() {
  return (
    // `<main>` -> this is the "Page body" element in the Figma design
    <main className='gfe-main'>
      <div className='flex flex-wrap items-center justify-start gap-5 py-12'>
        {buttonVariantsA.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
            iconColor={button.iconColor}
          />
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-start gap-5 py-12'>
        {buttonVariantsB.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
            iconColor={button.iconColor}
          />
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-start gap-5 py-12'>
        {buttonVariantsC.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
            iconColor={button.iconColor}
          />
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-start gap-5 py-12'>
        {buttonVariantsD.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
            iconColor={button.iconColor}
          />
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-start gap-5 py-12'>
        {buttonVariantsE.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
            iconColor={button.iconColor}
          />
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-start gap-5 py-12'>
        {buttonVariantsF.map(button => (
          <Button
            key={button.key}
            label={button.label}
            classNames={button.classNames}
            withText={button.withText}
            withIcon={button.withIcon}
            iconPosition={button.iconPosition}
            iconSize={button.iconSize}
            iconColor={button.iconColor}
          />
        ))}
      </div>
    </main>
  );
}
