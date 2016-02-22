# Flux Stores

### NoteStore

Holds all persisted note data.

##### Actions:
- `receiveAllProfiles`
- `receiveSingleProfile`

##### Listeners:
- `ProfilesIndex` (passes to `ProfileIndexItem` via props)
- `ProfileDetail`

### ProfileDetailFormStore

Holds un-persisted profile data to send to the API.

##### Actions:
- `receiveProfileFormParams`

##### Listeners:
- `ProfileForm`

### YardStore

Holds all persisted yard data.

##### Actions:
- `receiveAllYards`
- `receiveSingleYard`
- `removeYard`
- `editYard`

##### Listeners:
- `YardIndex`

### YardFormStore

Holds un-persisted yard data to send to the API.

##### Actions:
- `receiveYardFormParams`

##### Listeners:
- `YardForm`

### MessageStore

Holds all persisted message data to send to the API.

##### Actions:
- `receiveAllMessages`
- `receiveSingleMessage`
- `removeMessage`

##### Listeners:
- `MessageForm`


### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
