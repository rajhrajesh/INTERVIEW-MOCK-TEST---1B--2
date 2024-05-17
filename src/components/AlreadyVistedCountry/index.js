import './index.css'

const AlreadyVistedCountry = props => {
  const {visitedCountryDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <li className="visited-countries-list-item">
      <div className="visited-countries-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="details-section">
          <p className="visited-country-title">{name}</p>
          <button
            className="delete-button"
            type="button"
            onClick={remove}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default AlreadyVistedCountry
