# Phase 4: Yard (1 day)

## Rails
### Models
* Yard

### Controllers
* Yard controller

### Views
* yards/index.json.jbuilder
* yards/new.html.erb
* yards/show.json.jbuilder


## Flux
### Views (React Components)
* YardsIndex
  - YardIndexItem
* map

### Stores
* Yard

### Actions
* ApiActions.receiveAllYards -> triggered by ApiUtil
* ApiActions.receiveSingleYard
* YardActions.fetchAllYards -> triggers ApiUtil
* YardActions.fetchSingleYard
* YardActions.editYard

## Gems/Libraries
