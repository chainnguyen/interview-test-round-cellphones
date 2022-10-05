import { locale, extend } from 'dayjs'
import 'dayjs/locale/vi'

import weekday from 'dayjs/plugin/weekday'

locale('vi')
extend(weekday)
