
# USER TABLE
|Column|Type|Options|
|------|----|-------|
|id|string|null:false|
|name|string|null: false|
|password|integer|null: false,|
|mail_address|integer|null: false|
## Association
has_many :group_users
has_many :groups, through::group_users
has_many :messages

# GROUP_USERS TABLE
|user_id|integer|null: false, foreign_key :true|
|group_id|integer|null: false, foreign_key: true|
## Association
belongs_to :user
belongs_to :group 


# GROUP TABLE
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
## Association
has_many :gruop_users
has_many :users, through::group_users
has_many :messages



# MESSAGE TABLE
|Column|Type|Options|
|------|----|-------|
|message|text|
|image|text|
|user_id|integer|null: false, foreign_key :true|
|group_id|integer|null: false, foreign_key: true|
## Association
-belongs_to :group, 
-belongs_to :user, 










