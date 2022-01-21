import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{id: 'q1', author: 'CJ', text: 'React is Interesting!'},
	{id: 'q2', author: 'Chika', text: 'Reactjs is great!'}
];

const AllQuote = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
};

export default AllQuote;