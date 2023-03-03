# Welcome To the Marvel App

## Features

### List of characters

The api will show random characters every time you load or refresh It.

### Search

#### Character Search

Characters can be searched by using the search bar, by full name or a piece of It.

#### Comic Search

Comics can be searched as well, provided full URL of the Comic.

### Card Details

Card Characters link to a modal, which contains a list of comics where the character appears.

### Comic modal

Shows a list of comics, redirects to a new view when a comic image is clicked.

### Comic View

Provided a comic URL or by being redirected by comic modal, comic view shows the full image of the comic, as well as its details and description.

### Favourites

Each card can be set as favourite (star card icon).

### Favourite List

Shows only favourite cards by checking star button (top right). This feature can be used any time.

### Responsive Design

The app adapts according to resolotion size

## Features not achieved

### Comic search by comic name or link (only with full URL).

I guess I could have used a dropBox for this feature, since I was confused about how to use the same input with different fetch calls.

### Search bar does not support multiple characters or comics.

This one I didn't kwow how to implement. Couldn't figure out how to pass multiple characters to the fecth call.

### No redux implementation.

I had no time left to implement this.
