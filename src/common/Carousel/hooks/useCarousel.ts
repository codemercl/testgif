import { ref, computed } from 'vue'

export function useCarousel(slides: string[], slidesToShow: number) {
  const currentSlide = ref(0)

  const visibleSlides = computed(() => {
    return slides
  })

  const nextSlide = () => {
    if (currentSlide.value < slides.length - slidesToShow) {
      currentSlide.value++
    }
  }

  const prevSlide = () => {
    if (currentSlide.value > 0) {
      currentSlide.value--
    }
  }

  const sliderStyle = computed(() => {
    const translateX = currentSlide.value * (100 / slidesToShow)
    return {
      transform: `translateX(-${translateX}%)`,
      transition: 'transform 0.3s ease-in-out'
    }
  })

  return { currentSlide, nextSlide, prevSlide, sliderStyle, visibleSlides }
}