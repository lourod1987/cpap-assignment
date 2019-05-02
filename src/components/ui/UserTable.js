import React from 'react';
import loading from '../../imgs/transparent-loading-4.gif';
import PropTypes from 'prop-types';

const UserTable = props => {
  let x = 0;
  const { articlesTable } = props;
  return (
    <div>
      {articlesTable.length === 0 ?
          (<img src={loading} className="no-results" alt="" />)
          :(<table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Article Title</th>
                  <th>Visited Article Page</th>
                  <th>Seen Full Article on Engagdet</th>
                </tr>
              </thead>
              <tbody>
                {articlesTable.map( article => (
                <tr key={`${article.viewed}&${x}`}>
                  <td>{x+=1}</td>
                  <td>{article.viewed}</td>
                  <td>{article.seen}</td>
                  <td>{article.fullArticle}</td>
                </tr>
                ))}
              </tbody>
          </table>)}
    </div>
  )
}

UserTable.propTypes = {
  articlesTable: PropTypes.array.isRequired,
}

export default UserTable;
