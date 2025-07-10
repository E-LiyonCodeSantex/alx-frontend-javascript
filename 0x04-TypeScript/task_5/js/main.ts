// Define distinct branded types

export interface MajorCredits {
  credits: number;
  __brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  __brand: 'Minor';
}

// Factory helper to cast number to branded types
function toMajorCredits(credits: number): MajorCredits {
  return { credits, __brand: 'Major' };
}

function toMinorCredits(credits: number): MinorCredits {
  return { credits, __brand: 'Minor' };
}

// Sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return toMajorCredits(subject1.credits + subject2.credits);
}

// Sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return toMinorCredits(subject1.credits + subject2.credits);
}
