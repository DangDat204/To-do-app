const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/ai-suggest', async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Missing title' });

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `
Bạn là trợ lý AI. Khi người dùng nhập yêu cầu như "${title}", hãy trả về một danh sách 4-5 nguyên liệu hoặc mục cần thiết, mỗi mục là một dòng, ví dụ:
- 1 kg cà chua
- 200g mì Ý
- 300g thịt bò xay
- 1 củ hành tây
- 1 lọ sốt cà chua

Chỉ trả về danh sách, không giải thích gì thêm.
    `;
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    // Tách từng dòng, loại bỏ ký tự đầu dòng nếu có
    const items = text
      .split('\n')
      .map(line => line.replace(/^[-•]\\s*/, '').trim())
      .filter(Boolean);

    res.json({ suggestions: items });
  } catch (err) {
    res.status(500).json({ error: 'AI suggestion failed', detail: err.message });
  }
});

module.exports = router;