export interface Wallpaper {
    url: string;
    name: string;
}

export interface FullWallpaper extends Wallpaper{
  liked:boolean,
  suggested:boolean,
  library:boolean
}
export function useLibrary():FullWallpaper[]{
    const Wallpaper = useWallpapers()
    return Wallpaper.filter(Wallpaper=>Wallpaper.library)
}
export function useLiked():FullWallpaper[]{
    const Wallpaper = useWallpapers()
    return Wallpaper.filter(Wallpaper=>Wallpaper.liked)
}

export function useSuggested():FullWallpaper[]{
    const Wallpaper = useWallpapers()
    return Wallpaper.filter(Wallpaper=>Wallpaper.suggested)
}





export function useWallpapers(): FullWallpaper[] {
    return [{
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/grtS8AsZRGyLm3VJ2SHS7g",
        "name": "Heritage",
        liked: true,
        suggested: true,
        library: false
    }, {

        url: "https://ideogram.ai/assets/progressive-image/balanced/response/0reS7n7eRfClLKHIEiWJUw",
        "name": "Late night",
        liked: true,
        suggested: false,
        library: true
    },
    {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/O0l3cIsdSJm7CRjGqrb5-Q",
        "name": "Motivation",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/6n67jVOxTRW0-xEqMpLw9A",
        name: "Night sky",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/IfLz4vd4Tfy5fnBlMN0cLA",
        name: "Sunrise",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Hma-KogESI-h9o8oyO1YKg",
        name: "Shoes",
        liked: false,
        suggested: true,
        library: false
    }]
}