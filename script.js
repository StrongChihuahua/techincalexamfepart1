// Mock Data
const zip_codes = [
  'Nowheresville, XX 00000',
  'Las Vegas, 88901',
  'San Francisco, 25301',
]
const items = [
  'Abuse (Child, Domestic, Sexual)',
  'Agencies & Administration',
  'Automobile (DUI, Crimes, Speeding)',
  'Automobiles (Accidents, Insurance)',
  'Banking (Business, Consumer, Mortgage)',
  'Bars & Restaurants',
  'Business Formation & Dissolution',
  'Children (Adoption, Custody, Support)',
  'Class Actions (Bad Drugs, Products)',
  'Commercial Law and Contracts',
  'Commercial Real Estate',
  'Lorem ipsum',
  'Fusce quam justo',
  'Fusce placerat dapibus enim nec luctus',
  'Ex orci placerat augue',
  'Aliquam rhoncus ac massa',
  'Sed et efficitur tortor',
  'Children (Adoption, Custody, Support)',
  'Class Actions (Bad Drugs, Products)',
  'Commercial Law and Contracts',
  'Commercial Real Estate',
  'Lorem ipsum',
  'Fusce quam justo',
  'Fusce placerat dapibus enim nec luctus',
  'Ex orci placerat augue',
  'Aliquam rhoncus ac massa',
]

const handleOnClickCategory = () => {
  const dropdownMenu = document.querySelector('.dropdown-content')
  const styles = window.getComputedStyle(dropdownMenu)

  dropdownMenu.style.display = styles.display === 'block' ? 'none' : 'block'
}

const handleOnClickMenuItem = (item) => {
  if (item) {
    const modal = document.getElementById('category-select-modal')
    modal.style.display = 'block'

    document.getElementById('select-category-span').textContent = item
  }
  const dropdownMenu = document.querySelector('.dropdown-content')

  dropdownMenu.style.display = 'none'
}

const handleOnClickReadReview = () => {
  const modal = document.getElementById('client-review-modal')
  modal.style.display = 'block'
}

const modal = document.getElementById('category-list-modal')

// Get the <button> element that closes the modal
const closes = document.getElementsByClassName('close')

// Get the <ul> element
const ulElement = document.querySelector('.category-ul-list')

// Loop through the items and create <li> elements
for (let i = 0; i < items.length; i++) {
  const liElement = document.createElement('li')
  const aElement = document.createElement('a')
  aElement.href = '#'
  aElement.textContent = items[i]
  liElement.appendChild(aElement)
  ulElement.appendChild(liElement)
}

const handleOnClickMoreCategory = () => {
  const modal = document.getElementById('category-list-modal')
  modal.style.display = 'block'
}

for (const close of closes) {
  close.onclick = () => {
    const modal = document.getElementById('category-list-modal')
    modal.style.display = 'none'

    const modal2 = document.getElementById('category-select-modal')
    modal2.style.display = 'none'

    const modal3 = document.getElementById('client-review-modal')
    modal3.style.display = 'none'
  }
}
// When the user clicks on <span> (x), close the modal

const autosuggestInput = document.getElementById('autosuggest')
const suggestionList = document.getElementById('suggestion-list')

const handleInput = () => {
  const inputText = autosuggestInput.value.toLowerCase()
  if (inputText === '') {
    suggestionList.style.display = 'none'
  } else {
    const filteredSuggestions = zip_codes.filter((fruit) =>
      fruit.toLowerCase().includes(inputText)
    )

    renderSuggestions(filteredSuggestions, inputText)
  }
}

autosuggestInput.addEventListener('input', handleInput)

const renderSuggestions = (suggestions, inputText) => {
  suggestionList.innerHTML = ''

  suggestions.forEach((suggestion) => {
    const suggestionItem = document.createElement('li')
    const highlightedSuggestion = highlightMatch(suggestion, inputText)
    suggestionItem.innerHTML = highlightedSuggestion

    suggestionItem.addEventListener('click', () => {
      autosuggestInput.value = suggestion
      suggestionList.innerHTML = ''
    })

    suggestionList.appendChild(suggestionItem)
  })

  if (suggestions.length > 0) {
    suggestionList.style.display = 'block'
  } else {
    suggestionList.style.display = 'none'
  }
}

const highlightMatch = (suggestion, inputText) => {
  const regex = new RegExp(inputText, 'gi')
  return suggestion.replace(
    regex,
    (match) => `<span class="highlight">${match}</span>`
  )
}

const handleOnCloseReviewModal = () => {
  document.getElementById('client-review-modal').style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  const modal = document.getElementById('category-list-modal')
  const modal2 = document.getElementById('category-select-modal')
  const modal3 = document.getElementById('client-review-modal')
  const drpdown = document.getElementById('dropdown-content')
  if (event.target == modal) {
    modal.style.display = 'none'
  }

  if (event.target == modal2) {
    modal2.style.display = 'none'
  }

  if (event.target == modal3) {
    modal3.style.display = 'none'
  }

  if (
    !suggestionList.contains(event.target) &&
    event.target !== autosuggestInput
  ) {
    suggestionList.style.display = 'none'
  }
}
