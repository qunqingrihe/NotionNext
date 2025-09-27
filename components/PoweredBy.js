import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://github.com/AsterZephyr'
        className='underline justify-start'>
        Aster Zephyr
      </a>
      <span className='text-xs text-gray-500 ml-2'>Go · LLM · Java · Rust</span>
      .
    </div>
  )
}
