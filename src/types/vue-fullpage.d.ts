declare module 'vue-fullpage.js' {
  import { App } from 'vue'

  interface FullPageOptions {
    // 基础选项
    licenseKey?: string
    menu?: string
    lockAnchors?: boolean
    anchors?: string[]
    navigation?: boolean
    navigationPosition?: 'left' | 'right'
    navigationTooltips?: string[]
    showActiveTooltip?: boolean
    slidesNavigation?: boolean
    slidesNavPosition?: 'top' | 'bottom'

    // 滚动选项
    css3?: boolean
    scrollingSpeed?: number
    autoScrolling?: boolean
    fitToSection?: boolean
    fitToSectionDelay?: number
    scrollBar?: boolean
    easing?: string
    easingcss3?: string
    loopBottom?: boolean
    loopTop?: boolean
    loopHorizontal?: boolean
    continuousVertical?: boolean
    continuousHorizontal?: boolean
    scrollHorizontally?: boolean
    interlockedSlides?: boolean | number[]
    dragAndMove?: boolean | string
    offsetSections?: boolean
    resetSliders?: boolean
    fadingEffect?: boolean | string
    normalScrollElements?: string
    scrollOverflow?: boolean
    scrollOverflowReset?: boolean
    scrollOverflowOptions?: any
    touchSensitivity?: number
    bigSectionsDestination?: 'top' | 'bottom' | null

    // 可访问性
    keyboardScrolling?: boolean
    animateAnchor?: boolean
    recordHistory?: boolean

    // 设计
    controlArrows?: boolean
    verticalCentered?: boolean
    sectionsColor?: string[]
    paddingTop?: string | number
    paddingBottom?: string | number
    fixedElements?: string
    responsiveWidth?: number
    responsiveHeight?: number
    responsiveSlides?: boolean
    parallax?: boolean | string
    parallaxOptions?: {
      type?: 'reveal' | 'cover'
      percentage?: number
      property?: string
    }
    dropEffect?: boolean | string
    waterEffect?: boolean | string
    cards?: boolean
    cardsOptions?: {
      perspective?: number
      fadeBackground?: boolean
      fadeContent?: boolean
    }

    // 自定义选择器
    sectionSelector?: string
    slideSelector?: string

    // 回调函数
    afterLoad?: (origin: any, destination: any, direction: string) => void
    onLeave?: (origin: any, destination: any, direction: string) => void
    afterRender?: () => void
    afterResize?: (width: number, height: number) => void
    afterReBuild?: () => void
    afterResponsive?: (isResponsive: boolean) => void
    afterSlideLoad?: (
      section: any,
      origin: any,
      destination: any,
      direction: string
    ) => void
    onSlideLeave?: (
      section: any,
      origin: any,
      destination: any,
      direction: string
    ) => void
  }

  interface FullPageApi {
    moveSectionUp(): void
    moveSectionDown(): void
    moveTo(section: number | string, slide?: number): void
    silentMoveTo(section: number | string, slide?: number): void
    moveSlideRight(): void
    moveSlideLeft(): void
    setAutoScrolling(active: boolean): void
    setFitToSection(active: boolean): void
    fitToSection(): void
    setLockAnchors(active: boolean): void
    setAllowScrolling(active: boolean, directions?: string): void
    setKeyboardScrolling(active: boolean, directions?: string): void
    setRecordHistory(active: boolean): void
    setScrollingSpeed(speed: number): void
    destroy(type?: string): void
    reBuild(): void
    setResponsive(active: boolean): void
    responsiveSlides: {
      toSections(): void
      toSlides(): void
    }
    getActiveSection(): any
    getActiveSlide(): any
  }

  const VueFullPage: {
    install(app: App, options?: FullPageOptions): void
  }

  export default VueFullPage
  export { FullPageOptions, FullPageApi }
}
