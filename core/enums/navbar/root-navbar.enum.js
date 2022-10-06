// All categories
import { PHONE } from '@/core/enums/navbar/categories/phone.enum'
import { LAPTOP } from '@/core/enums/navbar/categories/laptop.enum'
import { TABLET } from '@/core/enums/navbar/categories/tablet.enum'
import { SOUND } from '@/core/enums/navbar/categories/sound.enum'
import { WATCH } from '@/core/enums/navbar/categories/watch.enum'
import { SMART_HOUSE } from '@/core/enums/navbar/categories/smart-house.enum'
import { ACCESSORY } from '@/core/enums/navbar/categories/accessory.enum'
import { COMPUTER } from '@/core/enums/navbar/categories/computer.enum'
import { TELEVISION } from '@/core/enums/navbar/categories/television.enum'
import { RECOVERY } from '@/core/enums/navbar/categories/recovery.enum'
import { SECONDHAND } from '@/core/enums/navbar/categories/secondhand.enum'
import { PROMOTION } from '@/core/enums/navbar/categories/promotion.enum'
import { NEWS_TECH } from '@/core/enums/navbar/categories/news-tech.enum'

export const ROOT_NAVBAR = [
  {
    name: 'Điện thoại',
    icon: 'icon-cps-3.svg',
    categories: PHONE
  },
  {
    name: 'Laptop',
    icon: 'icon-cps-380.svg',
    categories: LAPTOP
  },
  {
    name: 'Máy tính bảng',
    icon: 'icon-cps-4.svg',
    categories: TABLET
  },
  {
    name: 'Âm thanh',
    icon: 'icon-cps-220.svg',
    categories: SOUND
  },
  {
    name: 'Đồng hồ',
    icon: 'icon-cps-610.svg',
    categories: WATCH
  },
  {
    name: 'Nhà thông minh',
    icon: 'icon-cps-845.svg',
    categories: SMART_HOUSE
  },
  {
    name: 'Phụ kiện',
    icon: 'icon-cps-30.svg',
    categories: ACCESSORY
  },
  {
    name: 'PC - Màn hình',
    icon: 'icon_cpu.svg',
    categories: COMPUTER
  },
  {
    name: 'Tivi',
    icon: 'icon-cps-1124.svg',
    categories: TELEVISION
  },
  {
    name: 'Thu cũ',
    icon: 'icon-cps-tcdm.svg',
    categories: RECOVERY
  },
  {
    name: 'Hàng cũ',
    icon: 'icon-cps-29.svg',
    categories: SECONDHAND
  },
  {
    name: 'Khuyến mãi',
    icon: 'icon-cps-promotion.svg',
    categories: PROMOTION
  },
  {
    name: 'Tin công nghệ',
    icon: 'icon-cps-tech.svg',
    categories: NEWS_TECH
  }
]
