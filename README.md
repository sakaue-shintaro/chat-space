
# USER TABLE
|Column|Type|Options|
|------|----|-------|
|user_name|integer|null: false|
|pass_ward|integer|null: false,|
|mail_address|integer|null: false|
## Association
- belongs_to :group
- belongs_to :message

# MESSAGE TABLE
|Column|Type|Options|
|------|----|-------|
|message|integer|null: false, foreign_key:true|
|phot|text|null: false, foreugn_key:true|
## Association
-has_many :group, through,  :group
-has_many :user, through,  :message

# GROUP TABLE
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, fore_key:true|
|user_id|integer|null: false, fore_key:true|
## Association
-has_many :group,through, user_group
-has_many :user

# USER_GROUPTABLE 
|user_id|integer|null: false, fore_key:true|
## Association
belongs_to : user
belongs_to : group  

# GROUP_MESSAGETABLE
|group_id|integer|null: false, fore_key:true|
## Association
belongs_to: group
belongs_to: message






