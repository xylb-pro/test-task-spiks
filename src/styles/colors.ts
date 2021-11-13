export enum COLOR {
  repoDescriptionGray = '#8b949e',
  backgroundHeader = '#1b1f26',
  inputBackground = '#101010',
  backgroundMain = '#0d1117',
  repoTitleBlue = '#58a6ff',
  textWhite = '#f5f5f5',
  gray = '#808080',
  red = '#CC0033',
}

export const getHexOpacity = (perc: number): string => {
  if (perc < 0) {
    return '00';
  }
  if (perc > 100) {
    return 'FF';
  }
  const value = Math.trunc((perc * 255) / 100);
  const hex = value.toString(16);

  if (String(hex).length === 1) {
    return '0' + hex;
  }
  return hex;
};
