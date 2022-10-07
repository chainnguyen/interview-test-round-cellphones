// All categories
import { MOBILE } from '@/core/enums/navbar/categories/mobile.enum'
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
    dependent: 'mobile',
    path: '/mobile.html',
    categories: MOBILE
  },
  {
    name: 'Laptop',
    icon: 'icon-cps-380.svg',
    dependent: 'laptop',
    path: '/laptop.html',
    categories: LAPTOP
  },
  {
    name: 'Máy tính bảng',
    icon: 'icon-cps-4.svg',
    dependent: 'tablet',
    path: '/tablet.html',
    categories: TABLET
  },
  {
    name: 'Âm thanh',
    icon: 'icon-cps-220.svg',
    dependent: 'sound',
    path: '/thiet-bi-am-thanh.html',
    categories: SOUND
  },
  {
    name: 'Đồng hồ',
    icon: 'icon-cps-610.svg',
    dependent: 'watch',
    path: '/do-choi-cong-nghe.html',
    categories: WATCH
  },
  {
    name: 'Nhà thông minh',
    icon: 'icon-cps-845.svg',
    dependent: 'smart-house',
    path: '/nha-thong-minh.html',
    categories: SMART_HOUSE
  },
  {
    name: 'Phụ kiện',
    icon: 'icon-cps-30.svg',
    dependent: 'accessory',
    path: '/phu-kien.html',
    categories: ACCESSORY
  },
  {
    name: 'PC - Màn hình',
    icon: 'icon_cpu.svg',
    dependent: 'computer',
    path: '/may-tinh-de-ban.html',
    categories: COMPUTER
  },
  {
    name: 'Tivi',
    icon: 'icon-cps-1124.svg',
    dependent: 'television',
    path: '/tivi.html',
    categories: TELEVISION
  },
  {
    name: 'Thu cũ',
    icon: 'icon-cps-tcdm.svg',
    dependent: 'recovery',
    path: '/thu-cu-doi-moi.html',
    categories: RECOVERY
  },
  {
    name: 'Hàng cũ',
    icon: 'icon-cps-29.svg',
    dependent: 'secondhand',
    path: '/hang-cu.html',
    categories: SECONDHAND
  },
  {
    name: 'Khuyến mãi',
    icon: 'icon-cps-promotion.svg',
    dependent: 'promotion',
    path: '/danh-sach-khuyen-mai.html',
    categories: PROMOTION
  },
  {
    name: 'Tin công nghệ',
    icon: 'icon-cps-tech.svg',
    dependent: 'news-tech',
    path: '/sforum',
    categories: NEWS_TECH
  }
]
