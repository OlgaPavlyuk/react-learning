import React from 'react';
import { uniqueId } from 'lodash';
import Tag from '../Tag';

const CardsTable = (props) => {
  const renderTags = (tag) => <Tag title={tag} key={uniqueId()} />;

  const renderRow = (card) => {
    const { tags } = card;
    // const repeatDate = lastRepeat !== '' ? new Date(lastRepeat).toLocaleDateString() : '-';
    return (
      <tr key={card.id}>
        <td>{card.front}</td>
        <td>{card.back}</td>
        {/* <td>{repeatDate}</td> */}
        <td>{card.status}</td>
        <td>{tags.map(renderTags)}</td>
      </tr>
    );
  };

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th>Front</th>
          <th>Back</th>
          {/* <th>Last repeat</th> */}
          <th>Status</th>
          <th>Themes</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map(renderRow)}
      </tbody>
    </table>
  );

  return (
    renderTable()
  );
};

export default CardsTable;
