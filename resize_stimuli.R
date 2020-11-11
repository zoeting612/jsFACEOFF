# Resize FACEOFF images

library('imager')
library('tidyverse')
library('pbapply')

# functions

batch.resize <- function (imgFile, scale = 1/3) {
  # takes the full path to an image file as input
  # resizes that image by scale
  require(imager)

  stimImage <- load.image(imgFile)
  stimImage.resize <- imresize(stimImage, scale = scale)
  
  # write new image
  newImgFile <- imgFile %>% str_replace(pattern = 'morfs', replacement = 'morf_resized')
  newImgFile.break <- newImgFile %>% str_split(pattern = '/', simplify = T)
  newImgFile.dir <- newImgFile.break %>% 
                    magrittr::extract(1:length(.)-1) %>%
                    str_c(collapse = '/')
  dir.create(path = newImgFile.dir, recursive = T)
  save.image(stimImage.resize, file = newImgFile)
  
}

# define full path to images

filePaths <- list.files(path = 'morfs', pattern = '.jpg', recursive = T, full.names = T)

pblapply(X = filePaths, FUN = batch.resize)
