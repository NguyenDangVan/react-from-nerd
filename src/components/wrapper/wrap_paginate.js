const WrapPaginate = (props) => {
	const handleClick = (e) => {
		props.handleClick(e);
	}

	const { data, pageLimit } = props;
	const pageNumbers = [];

	for(let i=1; i <= Math.ceil(data.length / pageLimit); i++)
		pageNumbers.push(i);

	return props.children({
		pageNumbers: pageNumbers,
		handleClick: handleClick
	})
}

export default WrapPaginate;
