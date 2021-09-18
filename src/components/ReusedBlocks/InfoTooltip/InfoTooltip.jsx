import './InfoTooltip.css';

const InfoTooltip = ({
  title,
  src,
  isOpen,
  onClose,
}) => {
  return (
    isOpen && 
    <div className={`popup popup_type_infoTooltip ${ isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__content popup__content_type_infoTooltip">
        <button 
          aria-label="Закрыть"
          className="button popup__close-button popup__close-button_type_infoTooltip"
          onClick={onClose}
        />
        <img src={src} alt={title} className="popup__icon popup__icon_type_infoTooltip"/>
        <p className="popup__title popup__title_type_infoTooltip">{title}</p>
      </div>
    </div>
  )
}

export default InfoTooltip;