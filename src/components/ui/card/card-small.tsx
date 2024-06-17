"use client";
import Image from "next/image";
import { Button } from "../button";
import ArrowRightIcon from "@/components/icons/arrow-right-icon";
import StarIcon from "@/components/icons/star-icon";
import Link from "next/link";
import { useState } from "react";
import { CardWithForm } from "../card-modal/card-modal";

function CardSmall({ hover }: { hover?: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-[0.5rem] 3xl:w-[9vw] xl:w-[11vw] lg:w-[12.5vw] md:w-[16vw] xs:w-[20vw] w-[28vw]">
      <div className="3xl:h-[14.5vw] xl:h-[17.5vw] lg:h-[20vw] md:h-[26vw] xs:h-[31vw] h-[45.5vw] rounded-[6px] overflow-hidden relative">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx105778-74YTFlQzcFPg.png"
          alt="cover image"
          fill={true}
          className="object-cover"
        />
        {hover && (
          <div
            className="absolute opacity-0 hover:opacity-100 
            flex flex-col justify-between w-full h-full 
            p-[1rem] text-card-hover hover:bg-black hover:bg-opacity-65 
            transition-all duration-200 ease-in-out"
          >
            <div className="flex flex-col items-center gap-[1rem] pt-[1rem] font-semibold">
              <div className="flex gap-[4px]">
                <StarIcon className="w-[1.75rem] h-[1.75rem]" />
                <div className="text-[32px] leading-[32px] pt-[2px] text-justify">
                  8
                </div>
              </div>
              <div className="text-[1.375rem] leading-[1.375rem]">5/160</div>
            </div>
            <div className="flex gap-[0.5rem] h-[2rem]">
              <Button
                className="w-2/3 h-full border-2 border-card-hover font-bold "
                variant="ghost"
                onClick={handleEditClick}
              >
                Edit
              </Button>
              <Button
                className="w-1/3 h-full p-[0.5rem] border-2 border-card-hover"
                variant="ghost"
              >
                <Link href="/manga/70">
                  <ArrowRightIcon className="stroke-card-hover w-[1rem] h-[1rem]" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      <span className="font-semibold sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
        Chainsaw Man
      </span>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default CardSmall;

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`${!isOpen ? "hidden opacity-0" : "opacity-100"}
        transition-all duration-1000 ease-in-out 
        fixed w-screen min-h-screen inset-0 
        flex items-center justify-center z-50`}
    >
      <CardWithForm onClose={onClose} />
      <div
        className="fixed inset-0 bg-black opacity-50 -z-10"
        onClick={onClose}
      />
    </div>
  );
};
