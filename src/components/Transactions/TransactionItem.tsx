import { Joystick } from 'react-bootstrap-icons';

const TransactionItem: React.FC = () => {
  return (
    <li className="flex items-center justify-between py-5 px-3 border-t-2 border-b-2 border-pale-blue">
      <div className="transaction-content flex items-center">
        <div className="icon-wrapper flex items-center justify-center w-8 h-8 mr-3 bg-neon-dark-blue rounded-full">
          <Joystick className='w-4 h-4 text-white'/>
        </div>
        <div className="transaction-content-details">
          <h3 className="text-base font-medium text-neon-dark-blue">Spotify</h3>
          <p className="text-sm text-blue-grey">#Entertainment</p>
        </div>
      </div>
      <div className="transaction-details">
        <h3 className="text-base font-medium text-warning">- 7.00€</h3>       
      </div>
    </li>
  );
};

export default TransactionItem;
