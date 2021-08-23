import './BlockName.css';

function BlockName(props) {
  return (
    <div class="block-name"id={props.id}>
      <h2 class="block-name__title">{props.name}</h2>
      <div class="block-name__decoration-line"></div>
    </div>
  );
}

export default BlockName;