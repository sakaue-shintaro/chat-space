
# USER TABLE
|Column|Type|Options|
|------|----|-------|
|id|integer|null:false|
|user_name|integer|null: false|
|pass_ward|integer|null: false,|
|mail_address|integer|null: false|
## Association
- has_many :group, through: :user_id
- has_many :message

# USER_ID
|user_id|integer|null: false, fore_key:true|
## Association
belongs_to : user
belongs_to : group  


# GROUP TABLE
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, fore_key:true|
|user_id|integer|null: false, fore_key:true|
## Association
-has_many :groups,through, user_group
-has_many :user


# MESSAGE TABLE
|Column|Type|Options|
|------|----|-------|
|message|integer|null: false, foreign_key:true|
|phot|text|null: false, foreugn_key:true|
|user_id|integer|null: false, foreign_key:true|
## Association
-belongs_to :group, 
-belongs_to :user, 










