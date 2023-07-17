import './DataList.css';

const DataList = ({ data }) => {
  return (
    <div class="grid-container">
      {data?.map((item) => (
        <div class="grid-item" key={item.id}>
          <h4 className="num">{item.num}</h4>
          <p className='message'>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default DataList;
