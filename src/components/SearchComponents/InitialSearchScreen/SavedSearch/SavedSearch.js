import React from "react";
import saveSearchCss from "./SavedSearch.module.css";
import { FaBookmark, FaGripVertical } from "react-icons/fa";

function SavedSearch() {
  return (
    <div className={saveSearchCss.body}>
      <div className={saveSearchCss.titleSection}>
        <span className={saveSearchCss.title}>
          Your Saved Searches
        </span>
        <select className={saveSearchCss.sortBy}>
          <option value="SortBy" >Sort By</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th className={saveSearchCss.saveSearchTitle}>Covid Vaccine</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className={saveSearchCss.tableBody}>
          <tr >
            <td>
              <span className={saveSearchCss.description}>
                This will the space for description and additional information
                about the saved search or whichever it may represent
              </span>
            </td>
            <td>
              <div className={`${saveSearchCss.createdBy} d-flex flex-column`}>
                <span className={saveSearchCss.createdByTitle}>Created by</span>
                <span className={saveSearchCss.createrName}>N Harish</span>
              </div>
            </td>
            <td>
              <div className={`${saveSearchCss.createdBy} d-flex flex-column`}>
                <span className={saveSearchCss.createdByTitle}>Updated on</span>
                <span className={saveSearchCss.createrName}>02 JUN 2022</span>
              </div>
            </td>
            <td>
              <FaBookmark  className={saveSearchCss.icons}/>
            </td>
            <td>
              <FaGripVertical className={saveSearchCss.icons}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SavedSearch;
