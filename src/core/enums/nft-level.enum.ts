export enum NftLevelEnum {
  LVL1 = 0,
  LVL2 = 1,
  LVL3 = 2,
  LVL4 = 3,
  LVL5 = 4,
  LVL6 = 5,
  LVL7 = 6,
}

export const nftLevelCost: Record<NftLevelEnum, bigint> = {
  [NftLevelEnum.LVL1]: 0n,
  [NftLevelEnum.LVL2]: 5_00n,
  [NftLevelEnum.LVL3]: 10_00n,
  [NftLevelEnum.LVL4]: 45_00n,
  [NftLevelEnum.LVL5]: 100_00n,
  [NftLevelEnum.LVL6]: 500_00n,
  [NftLevelEnum.LVL7]: 1500_00n,
}

export const nftLevels = [
  NftLevelEnum.LVL1,
  NftLevelEnum.LVL2,
  NftLevelEnum.LVL3,
  NftLevelEnum.LVL4,
  NftLevelEnum.LVL5,
  NftLevelEnum.LVL6,
  NftLevelEnum.LVL7,
]
