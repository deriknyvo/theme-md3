function List(prop) {
    const items = prop.list.map((item, key) => {
        return <li key={`${item}-${key}`}>{item}</li>;
    });

    return (
        <ul>{items}</ul>
    );
}

export default List;
