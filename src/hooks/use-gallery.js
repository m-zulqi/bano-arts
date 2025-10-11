import { useState, useCallback, useMemo } from 'react'

export function useGallery(initialArtworks = []) {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  
  const filteredArtworks = useMemo(() => {
    return initialArtworks.filter(artwork => {
      const matchesFilter = filter === 'All' || artwork.category === filter
      const matchesSearch = search === '' || 
        artwork.title.toLowerCase().includes(search.toLowerCase()) ||
        artwork.description.toLowerCase().includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [initialArtworks, filter, search])

  const categories = useMemo(() => {
    const uniqueCategories = new Set(initialArtworks.map(art => art.category))
    return ['All', ...Array.from(uniqueCategories)]
  }, [initialArtworks])

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter)
  }, [])

  const handleSearchChange = useCallback((term) => {
    setSearch(term)
  }, [])

  return {
    filter,
    search,
    categories,
    filteredArtworks,
    handleFilterChange,
    handleSearchChange
  }
}
