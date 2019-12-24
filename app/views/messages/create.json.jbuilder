if @messages.persisted?
  json.text  @messages.content
  json.user_id  @messages.user.id
  json.user_name  @messages.user.name
  json.date @messages.created_at.strftime("%Y/%m/%d %H:%M")
  json.image @messages.image.url
  json.id @messages.id

end