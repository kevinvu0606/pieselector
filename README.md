# 📝 Pie Selector!
This app sends a HTTP request to a JSON server api ( https://superpie-api.herokuapp.com) - built using https://github.com/typicode/json-server 

## 🖥️ How to use
Simply load the page and see the details of the top 5 pie shops

## ⚡ Try it out
- [Try Pie Selector Here:](https://pie_selector_kevin.surge.sh/)

## 🛠️ Technologies used
- React
- JavaScript
- Material UI
- Axios

## 📐 Planning
- API used:https://superpie-api.herokuapp.com

## 🌱  Future updates
- Add graphs to compare the pricing between different pie shops
- add a search functino to search for a pie and see which stores has said pie!
- improve the use of state with Global state context and appReducer
## 🚧 My experience
- Used Axios to obtain the data
- Needed to use useEffect so that it would only render once 
  - within the useEffect two axios GET requests were made to obtain 1 - store info and 2- pie info
  - these were stored in state and updated in a functional component with a useState
  - a "loading" state was created so that the page would not render until the data was obtained
- Material UI was used to style
  - Grid layout 
  - Each shop was created with a card and populated using .map with the data form the axios request that was stored in state

### 📚 Challenges:
- Difficulties obtaining the data in the correct form as the original API was created incorrectly
- adding an anchor tag in JSX
- using async functions for multiple axios requests in a useEffect
- creating my own API 

## 📬 Contact 
### Kevin Vu
- [LinkedIn](https://www.linkedin.com/in/kevin-vu-06/)
- [E-mail](mailto:kevin.vu06@gmail.com)
