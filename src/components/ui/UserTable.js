import React from 'react';
import loading from '../../imgs/transparent-loading-4.gif';
// import PropTypes from 'prop-types';

const UserTable = props => {
  let x = 0;
  let i = -1;
  const { visited } = props;
  return (
    <div>
      {visited.length === 0 ?
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
                {visited.map( (v) => (
                <tr key={`${v.viewed}&${i+=1}`}>
                  <td>{x+=1}</td>
                  <td>{v.viewed}</td>
                  <td>{v.seen}</td>
                  <td>{v.fullArticle}</td>
                </tr>
                ))}
              </tbody>
          </table>)}
    </div>
  )
}

// UserTable.propTypes = {

// }

export default UserTable;

