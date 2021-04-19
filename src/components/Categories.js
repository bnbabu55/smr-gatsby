import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Categories = () => {
  const { categories } = useStaticQuery(graphql`
    query {
      categories: allWpCategory {
        nodes {
          name
          id
          uri
        }
      }
    }
  `)

  let catCount = categories.nodes.length
  let catRowSize = 6
  let catColumnSize = 2
  let rowOverage = 0

  if (catCount > catRowSize * catColumnSize) {
    rowOverage = catCount - catRowSize * catColumnSize
    catRowSize = Math.trunc(catRowSize + Math.ceil(rowOverage / catColumnSize))
  }

  let catComponent = renderCategory()

  function renderCategory() {
    let catGroups = groupBy(catRowSize, categories.nodes)
    return (
      <ul className="w-100 flex gap-x-3 font-Lato text-sm text-themeOrange">
        {catGroups.map(renderRow)}
      </ul>
    )
  }

  function renderRow(group, index) {
    return (
      <li key={`group-${index}`}>
        <ul className="amenity-list list-disc text-themeBlue-100">
          {group.map(renderColumn)}
        </ul>
      </li>
    )
  }

  function renderColumn(cat, index) {
    return (
      <li key={cat.id + index} className="pb-3">
        <Link
          to={`/news${cat.uri}`}
          className="font-Lato text-sm text-themeOrange"
        >
          {cat.name}
        </Link>
      </li>
    )
  }

  function groupBy(amountOfItemsPerGroup, items) {
    var groups = [],
      group,
      total = items.length
    for (var i = 0; i < total; i += amountOfItemsPerGroup) {
      group = items.slice(i, i + amountOfItemsPerGroup)
      groups.push(group)
    }
    return groups
  }

  return (
    <div className="category">
      <h3 className="font-Lato font-semibold text-lg text-themeBlue-text py-5">
        Categories
      </h3>
      {catComponent}
    </div>
  )
}

export default Categories
