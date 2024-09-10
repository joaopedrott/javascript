interface GenerateThumbnailSrcArgs {
    bookId: string
  }
  
  export function generateThumbnailSrc({ bookId }: GenerateThumbnailSrcArgs) {
    return `https://books.google.com/books/publisher/content/images/frontcover/${bookId}?fife=w400-h600&source=gbs_api
    `
  }