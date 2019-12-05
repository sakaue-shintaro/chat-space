
# USER TABLE
|Column|Type|Options|
|------|----|-------|
|id|int|null:false|
|user_name|int|null: false,foreign_key :true|
|pass_ward|integer|null: false,|
|mail_address|integer|null: false|
## Association
has_many :group_users
has_many :groups, through: :group_users
has_many :messages

# GROUP_USERS TABLE
|user_id|int|null: false, foreign_key :true|
|group_id|int|null: false, foreign_key: true|
## Association
belongs_to :user
belongs_to :group 


# GROUP TABLE
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, foreign_key :true|
## Association
has_many :gruop_users
has_many :users, through: group_users
has_many :messages



# MESSAGE TABLE
|Column|Type|Options|
|------|----|-------|
|message|int|null: false|
|phot|text|null: false, foreugn_key:true|
## Association
-belongs_to :group, 
-belongs_to :user, 










