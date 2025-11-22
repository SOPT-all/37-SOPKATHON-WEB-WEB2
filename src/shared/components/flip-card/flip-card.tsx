import React from 'react';
import * as s from './flip-card.css';

type FlipCardRootProps = {
  children: React.ReactNode;
  className?: string;
  isFlipped?: boolean;
};

const FlipCardRoot = ({
  children,
  className,
  isFlipped = false,
}: FlipCardRootProps) => {
  return (
    <div className={`${s.flipCardContainer} ${className ?? ''}`}>
      <div className={`${s.flipCard} ${isFlipped ? s.flipped : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Front = ({ children }: { children: React.ReactNode }) => (
  <div className={s.face}>{children}</div>
);

const Back = ({ children }: { children: React.ReactNode }) => (
  <div className={`${s.face} ${s.back}`}>{children}</div>
);

const FlipCard = Object.assign(FlipCardRoot, { Front, Back });
export default FlipCard;
