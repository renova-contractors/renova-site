# Google Places API Setup для динамического рейтинга

## Где находится Google Places API

**Прямые ссылки:**
- **Google Cloud Console**: https://console.cloud.google.com/
- **Places API Library** (библиотека API): https://console.cloud.google.com/apis/library/places-backend.googleapis.com
- **Credentials** (учетные данные): https://console.cloud.google.com/apis/credentials
- **Официальная документация**: https://developers.google.com/maps/documentation/places/web-service

## Настройка API ключа (пошаговая инструкция)

### Шаг 1: Откройте Google Cloud Console
Перейдите на: **https://console.cloud.google.com/**
- Войдите в свой аккаунт Google

### Шаг 2: Создайте или выберите проект
- Если у вас нет проекта, нажмите "Select a project" → "New Project"
- Введите название проекта (например, "Renova Site")
- Нажмите "Create"

### Шаг 3: Включите Places API
**Вариант 1 (через прямую ссылку):**
- Перейдите: https://console.cloud.google.com/apis/library/places-backend.googleapis.com
- Выберите ваш проект из списка
- Нажмите кнопку **"Enable"** (Включить)

**Вариант 2 (через меню):**
1. В левом меню нажмите "APIs & Services" → "Library"
2. В поиске введите "Places API"
3. Выберите **"Places API"** (не "Places API (New)")
4. Нажмите кнопку **"Enable"**

### Шаг 4: Создайте API ключ
1. Перейдите в "APIs & Services" → "Credentials"
   - Или по прямой ссылке: https://console.cloud.google.com/apis/credentials
2. Нажмите "+ CREATE CREDENTIALS" → "API key"
3. Скопируйте созданный API ключ
4. **(Рекомендуется)** Ограничьте ключ:
   - Нажмите на созданный ключ для редактирования
   - В разделе "API restrictions" выберите "Restrict key"
   - Выберите "Places API" из списка
   - Сохраните изменения

### Шаг 5: Добавьте ключ в переменные окружения

**Для локальной разработки** - создайте/обновите файл `.env.local`:
```env
GOOGLE_PLACES_API_KEY=ваш_api_ключ_здесь
```

**Для продакшена (Vercel/другой хостинг):**
- Перейдите в настройки проекта
- Добавьте переменную окружения:
  - Name: `GOOGLE_PLACES_API_KEY`
  - Value: ваш API ключ
- Сохраните и перезапустите проект

## Важно о стоимости

Google Places API имеет **бесплатный лимит**:
- **$200 бесплатных кредитов в месяц** (эквивалентно ~40,000 запросов Text Search)
- После этого: ~$0.032 за запрос

Для нашего случая (кэширование 1 час) это примерно:
- 24 запроса в день
- ~720 запросов в месяц
- **Полностью бесплатно!** ✅

## Как это работает

Рейтинг автоматически подтягивается из Google Maps для "Renova Contractors LLC" в Seattle по адресу "221 1st Ave W #247, Seattle, WA 98119".

Если API ключ не настроен или произошла ошибка, используются fallback значения:
- ratingValue: '4.9'
- reviewCount: '250'

## Кэширование

Данные кэшируются на 1 час (`revalidate: 3600`), чтобы минимизировать количество запросов к API и оставаться в пределах бесплатного лимита.

## Проверка работы

После настройки API ключа проверьте:
1. Откройте любую страницу услуг (например: `/kitchen-remodel-seattle`)
2. Откройте DevTools → Network
3. Найдите запрос к `/api/google-places-rating`
4. Проверьте, что возвращается актуальный рейтинг из Google Maps

## Troubleshooting

**Ошибка "API key not valid":**
- Убедитесь, что Places API включен в проекте
- Проверьте, что API ключ правильный
- Убедитесь, что ключ не имеет ограничений, блокирующих Places API

**Ошибка "Quota exceeded":**
- Проверьте использование в Google Cloud Console → "APIs & Services" → "Dashboard"
- Увеличьте кэширование или проверьте лимиты

