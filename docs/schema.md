# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
host?       | boolean   | not null, default: false
user_id     | integer   | not null, foreign key (references User), indexed

## yard
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      |
lng         | float     | not null
lat         | float     | not null

##yard comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
yard_id     | integer   | not null, foreign key (references yard), indexed
user_id     | integer   | not null, foreign key (references yard), indexed
rating      | integer   | not null
title       | string    | not null
body        | text      | not null

##host comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
host_id     | integer   | not null, foreign key (references user), indexed
poster_id   | integer   | not null, foreign key (references user), indexed
rating      | integer   | not null
title       | string    | not null
body        | text      | not null


## yard preferences
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
yard_id            | integer   | not null, foreign key (references yard), indexed
max_guests         | integer   | not null, default: 0
last_min_req_okay? | boolean   | not null, default: false
Gender_pref?       | boolean   | not null, default: false
Kid_Friendly?      | boolean   | not null, default: false
Pet_friendly?      | boolean   | not null, default: false
Smoking_allowed?   | boolean   | not null, default: false
Sleeping_setup?    | text      |


## Yard Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
yard_id     | integer   | not null, foreign key (references yard), indexed
pic_url     | string    | not null


## User Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
pic_url     | string    | not null



## profile_info
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
profile_id         | integer   | not null, foreign key (references profile), indexed
languages          | integer   | not null, default: 0
age                | integer   |
sex                | string    |
education          | string    |
occupation         | string    |
hometown           | string    |
interests          | text      | not null, default: 0
movies_tv          | text      |
books              | text      |
music              | text      |
amazing_fact       | text      |
countries_visited  | text      |
countries_lived    | text      |

## Messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
sender_id   | integer   | not null, foreign key (references users), indexed
recip_id    | string    | not null, foreign key (references users), indexed
subject     | string    |
body        | text      |


##Calendar
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed


##Stay
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
guest_cal_id  | integer   | not null, foreign key (references calendar), indexed
host_cal_id   | integer   | not null, foreign key (references calendar), indexed
start_date    | date      | not null
end_date      | date      | not null
pending       | boolean   | not null, default: true
