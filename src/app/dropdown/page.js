import Data from './Data'
// export const metadata = {
//   title: 'Get a Quote for High-Quality New and Refurbished Copiers | Copiers Utah',
//   description: 'Looking for a high-quality copier for your office? Copiers Utah offers a range of advanced copy machines for sale, including new and refurbished options. Fill out our easy form to get a personalized quote today',
// }
const dropdown = (props) => {
 return (
    <Data toggle={props.toggle} />
  )
}

export default dropdown
